/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.logica;

import com.udea.modelo.Customer;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author jerson.lopez
 */
@Local
public interface CustomerManagerLocal {

    List<Customer> getAllCustomers();

    Customer update(Customer customer);
    
}
