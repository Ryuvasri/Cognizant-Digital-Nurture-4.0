package com.example.hibernate;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class MainHibernate {
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = null;
        try {
            tx = session.beginTransaction();
            Employee emp = new Employee();
            emp.setName("John");
            emp.setSalary(50000.0);
            Integer id = (Integer) session.save(emp);
            tx.commit();
            System.out.println("Employee created with ID: " + id);
        } catch (Exception e) {
            if (tx != null) tx.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }
    }
}
