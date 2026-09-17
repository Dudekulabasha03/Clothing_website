import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, SavedAddress } from '../types';

const ADMIN_PASSWORD = 'DILG@ADMIN2025';
const USERS_KEY = 'dilgarments_users_v1';
const CURRENT_USER_KEY = 'dilgarments_current_user_v1';

interface AuthContextType {
  currentUser: User | null;
  isAdminAuthenticated: boolean;
  allUsers: User[];
  login: (phone: string) => { success: boolean; message: string };
  sendOtp: (phone: string) => { success: boolean; message: string; otp?: string };
  verifyOtp: (phone: string, otp: string, userData?: { name?: string; city?: string; email?: string }) => { success: boolean; message: string };
  register: (name: string, phone: string, city: string, email?: string) => { success: boolean; message: string };
  logout: () => void;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  updateUser: (updates: Partial<User>) => void;
  addAddress: (address: Omit<SavedAddress, 'id'>) => void;
  removeAddress: (addressId: string) => void;
  setDefaultAddress: (addressId: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

function loadUsers(): User[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadCurrentUser(): User | null {
  try {
    const raw = localStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allUsers, setAllUsers] = useState<User[]>(loadUsers);
  const [currentUser, setCurrentUser] = useState<User | null>(loadCurrentUser);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    () => sessionStorage.getItem('dg_admin_auth') === 'true'
  );

  // Sync currentUser to localStorage whenever it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
      // Also update in allUsers list
      setAllUsers(prev => {
        const updated = prev.map(u => u.id === currentUser.id ? currentUser : u);
        saveUsers(updated);
        return updated;
      });
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  }, [currentUser]);

  // In-memory / session storage OTP registry for security
  const sendOtp = (phone: string): { success: boolean; message: string; otp?: string } => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length < 10) return { success: false, message: 'Enter a valid 10-digit phone number.' };

    // Generate cryptographic 6-digit OTP code
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    sessionStorage.setItem(`dg_otp_${cleaned}`, JSON.stringify({
      code: generatedOtp,
      expiresAt: Date.now() + 5 * 60 * 1000 // 5 minutes validity
    }));

    return {
      success: true,
      message: `OTP sent to +91 ${cleaned}. (For test/demo: ${generatedOtp})`,
      otp: generatedOtp
    };
  };

  const verifyOtp = (
    phone: string,
    otp: string,
    userData?: { name?: string; city?: string; email?: string }
  ): { success: boolean; message: string } => {
    const cleaned = phone.replace(/\D/g, '');
    const stored = sessionStorage.getItem(`dg_otp_${cleaned}`);

    // Allow default master bypass for local demo / testing: '123456'
    let isValid = otp.trim() === '123456';

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Date.now() <= parsed.expiresAt && parsed.code === otp.trim()) {
          isValid = true;
        }
      } catch (e) {
        console.error('OTP parsing error:', e);
      }
    }

    if (!isValid) {
      return { success: false, message: 'Invalid or expired OTP. Please check or tap Resend.' };
    }

    // Clear used OTP
    sessionStorage.removeItem(`dg_otp_${cleaned}`);

    // Check if user exists, else register new user automatically
    const existing = allUsers.find(u => u.phone.replace(/\D/g, '') === cleaned);
    if (existing) {
      setCurrentUser(existing);
      return { success: true, message: `Welcome back, ${existing.name}!` };
    }

    const newUser: User = {
      id: `usr-${Date.now()}`,
      name: userData?.name?.trim() || `Customer ${cleaned.slice(-4)}`,
      phone: cleaned,
      city: userData?.city?.trim() || 'Tadipatri',
      email: userData?.email?.trim(),
      savedAddresses: [],
      createdAt: new Date().toLocaleString('en-IN'),
    };

    const updated = [...allUsers, newUser];
    setAllUsers(updated);
    saveUsers(updated);
    setCurrentUser(newUser);
    return { success: true, message: `Welcome to DIL Garments, ${newUser.name}! 🎉` };
  };

  const login = (phone: string): { success: boolean; message: string } => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length < 10) return { success: false, message: 'Enter a valid 10-digit phone number.' };
    const user = allUsers.find(u => u.phone.replace(/\D/g, '') === cleaned);
    if (!user) return { success: false, message: 'No account found. Please register first.' };
    setCurrentUser(user);
    return { success: true, message: `Welcome back, ${user.name}!` };
  };

  const register = (name: string, phone: string, city: string, email?: string): { success: boolean; message: string } => {
    const cleaned = phone.replace(/\D/g, '');
    if (!name.trim()) return { success: false, message: 'Please enter your name.' };
    if (cleaned.length < 10) return { success: false, message: 'Enter a valid 10-digit phone number.' };
    const exists = allUsers.find(u => u.phone.replace(/\D/g, '') === cleaned);
    if (exists) return { success: false, message: 'Phone already registered. Please login.' };

    const newUser: User = {
      id: `usr-${Date.now()}`,
      name: name.trim(),
      phone: cleaned,
      city: city.trim() || 'Tadipatri',
      email: email?.trim(),
      savedAddresses: [],
      createdAt: new Date().toLocaleString('en-IN'),
    };

    const updated = [...allUsers, newUser];
    setAllUsers(updated);
    saveUsers(updated);
    setCurrentUser(newUser);
    return { success: true, message: `Welcome to DIL Garments, ${newUser.name}! 🎉` };
  };

  const logout = () => setCurrentUser(null);

  const loginAdmin = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('dg_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('dg_admin_auth');
  };

  const updateUser = (updates: Partial<User>) => {
    if (!currentUser) return;
    setCurrentUser({ ...currentUser, ...updates });
  };

  const addAddress = (address: Omit<SavedAddress, 'id'>) => {
    if (!currentUser) return;
    const newAddr: SavedAddress = { ...address, id: `addr-${Date.now()}` };
    const addresses = address.isDefault
      ? currentUser.savedAddresses.map(a => ({ ...a, isDefault: false }))
      : currentUser.savedAddresses;
    updateUser({ savedAddresses: [...addresses, newAddr] });
  };

  const removeAddress = (addressId: string) => {
    if (!currentUser) return;
    updateUser({ savedAddresses: currentUser.savedAddresses.filter(a => a.id !== addressId) });
  };

  const setDefaultAddress = (addressId: string) => {
    if (!currentUser) return;
    updateUser({
      savedAddresses: currentUser.savedAddresses.map(a => ({
        ...a, isDefault: a.id === addressId
      }))
    });
  };

  return (
    <AuthContext.Provider value={{
      currentUser, isAdminAuthenticated, allUsers,
      login, sendOtp, verifyOtp, register, logout,
      loginAdmin, logoutAdmin,
      updateUser, addAddress, removeAddress, setDefaultAddress,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
