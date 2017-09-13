/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.logica;

import com.udea.modelo.Customer;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.annotation.Resource;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author jerson.lopez
 */
@Stateless
public class CustomerManager implements CustomerManagerLocal {

    @PersistenceContext(unitName = "com.udea_Lab2Arq-ejb_ejb_1.0-SNAPSHOTPU")
    private EntityManager em;
  
    // Add business logic below. (Right-click in editor and choose
    
    // "Insert Code > Add Business Method")

    @Override
    public List<Customer> getAllCustomers() {
        Query query = em.createNamedQuery("Customer.findAll");        
        return query.getResultList();
    }

    public Customer update(Customer customer) {
        return em.merge(customer);
    }
    
      
}
