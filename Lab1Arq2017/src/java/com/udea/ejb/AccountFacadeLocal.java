/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.ejb;

import com.udea.modelo.Account;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author lis
 */
@Local
public interface AccountFacadeLocal {

    void create(Account accont);

    void edit(Account accont);

    void remove(Account accont);

    Account find(Object id);

    List<Account> findAll();

    List<Account> findRange(int[] range);

    int count();

    boolean checkLogin(String u, String p);
    
}
