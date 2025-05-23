import { Tabs } from 'expo-router';
import { Home, CreditCard, TrendingUp, HandCoins } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3B82F6', // Cyan-600
        tabBarInactiveTintColor: '#6B7280', // Slate-500
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0', // Slate-200
          paddingTop: 5,
          paddingBottom: 5,
          height: 90,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: '#F8FAFC',
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
          color: '#0f172a', // Slate-900
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Overview',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="income"
        options={{
          title: 'Income',
          tabBarIcon: ({ color, size }) => <HandCoins size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: 'Expenses',
          tabBarIcon: ({ color, size }) => <CreditCard size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="investments"
        options={{
          title: 'Savings',
          tabBarIcon: ({ color, size }) => <TrendingUp size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
