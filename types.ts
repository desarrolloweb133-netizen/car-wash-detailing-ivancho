export enum UserRole {
  ADMIN = 'admin',
  CASHIER = 'cajero',
  WASHER = 'lavador',
  SUPERVISOR = 'supervisor'
}

export enum OrderStatus {
  PENDING = 'en_espera',
  WASHING = 'en_lavado',
  DETAILING = 'en_detailing',
  READY = 'listo',
  DELIVERED = 'entregado'
}

export enum PaymentMethod {
  CASH = 'efectivo',
  CARD = 'tarjeta',
  TRANSFER = 'transferencia',
  PENDING = 'pendiente' // Added for Pay Later option
}

export type PaymentStatus = 'paid' | 'pending';

export interface Client {
  id: string;
  full_name: string;
  dni?: string; // Optional
  phone: string;
  email?: string; // Optional
  total_washes: number; // New Loyalty Field
  created_at?: string;
}

export type VehicleType = 
  | 'sedan' 
  | 'suv' 
  | 'truck' // Camioneta
  | 'motorcycle' // Moto Lineal
  | 'motocarro' // Nuevo
  | 'tricimoto'
  | 'camion' 
  | 'volqueta'
  | 'gallineta'
  | 'trailer'
  | 'bus'
  | 'otro';

export interface Vehicle {
  id: string;
  client_id: string;
  plate: string;
  brand: string;
  model: string;
  color: string;
  type: VehicleType;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration_minutes: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  min_threshold: number;
  unit: string;
  supplier?: string;
}

export interface Employee {
  id: string;
  full_name: string;
  role: UserRole;
  phone: string;
  active: boolean;
}

export interface OrderItem {
  id: string;
  order_id: string;
  service_id: string;
  price_at_moment: number;
  service_name?: string; // Joined field
}

export interface Order {
  id: string;
  client_id: string;
  vehicle_id: string;
  status: OrderStatus;
  total: number;
  payment_method: PaymentMethod;
  payment_status?: PaymentStatus; // New field optional
  discount?: number;
  notes?: string;
  created_at: string;
  updated_at: string;
  
  // Joins for UI convenience
  client?: Client;
  vehicle?: Vehicle;
  items?: OrderItem[];
}

export interface LoyaltySettings {
  id: number;
  washes_required: number;
}

export interface Reward {
  id: string;
  customer_id: string;
  reward_type: string; // "Lavado Gratis"
  status: 'pending' | 'redeemed';
  created_at: string;
}