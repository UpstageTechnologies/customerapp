import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function AdminDashboard() {
  const { logout, user } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.adminHeader}>
        <Text style={styles.adminTitle}>KadaiApp Admin Panel</Text>
        <Text style={styles.adminUser}>Logged in as: {user?.name}</Text>
      </View>

      {/* Main Revenue Banner */}
      <View style={styles.revenueBox}>
        <Text style={styles.revLabel}>Total Platform Commission Earned</Text>
        <Text style={styles.revAmount}>₹1,48,500</Text>
      </View>

      {/* System Stats */}
      <Text style={styles.sectionTitle}>Platform Overview</Text>
      <View style={styles.statRow}>
        <View style={styles.statItem}><Text style={styles.statNum}>154</Text><Text style={styles.statLabel}>Total Shops</Text></View>
        <View style={styles.statItem}><Text style={styles.statNum}>3,240</Text><Text style={styles.statLabel}>Customers</Text></View>
        <View style={styles.statItem}><Text style={styles.statNum}>₹4.5L</Text><Text style={styles.statLabel}>Gross Vol</Text></View>
      </View>

      {/* Management Action List */}
      <Text style={styles.sectionTitle}>Approvals & Requests</Text>
      <TouchableOpacity style={styles.approvalCard} onPress={() => alert('Opening requests')}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize: 24, marginRight: 10}}>🏪</Text>
          <View>
            <Text style={styles.appTitle}>Shop Verification Requests</Text>
            <Text style={styles.appSub}>4 new shops waiting for approval</Text>
          </View>
        </View>
        <Text style={styles.badge}>4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.approvalCard, {marginTop: 10}]} onPress={() => alert('Opening complaints')}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize: 24, marginRight: 10}}>⚠️</Text>
          <View>
            <Text style={styles.appTitle}>Customer Disputes</Text>
            <Text style={styles.appSub}>All tickets resolved</Text>
          </View>
        </View>
        <Text style={[styles.badge, {backgroundColor:'#2ed573'}]}>0</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutText}>Exit Admin Control</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f172a', padding: 15 },
  adminHeader: { marginVertical: 20 },
  adminTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  adminUser: { color: '#94a3b8', fontSize: 14, marginTop: 4 },
  revenueBox: { backgroundColor: '#1e293b', padding: 25, borderRadius: 12, borderLeftWidth: 5, borderLeftColor: '#38bdf8', marginBottom: 25 },
  revLabel: { color: '#94a3b8', fontSize: 14, fontWeight: '600' },
  revAmount: { color: '#38bdf8', fontSize: 32, fontWeight: 'bold', marginTop: 5 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#f1f5f9', marginBottom: 15 },
  statRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 25 },
  statItem: { backgroundColor: '#1e293b', width: '30%', padding: 15, borderRadius: 10, alignItems: 'center' },
  statNum: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  statLabel: { color: '#64748b', fontSize: 11, marginTop: 3 },
  approvalCard: { backgroundColor: '#1e293b', padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  appTitle: { color: '#f1f5f9', fontWeight: 'bold' },
  appSub: { color: '#64748b', fontSize: 12 },
  badge: { backgroundColor: '#ef4444', color: '#fff', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, fontWeight: 'bold', fontSize: 12 },
  logoutBtn: { backgroundColor: '#334155', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 40, marginBottom: 30 },
  logoutText: { color: '#cbd5e1', fontWeight: 'bold' }
});