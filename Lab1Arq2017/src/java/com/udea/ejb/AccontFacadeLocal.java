/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.ejb;

import com.udea.modelo.Accont;
import java.util.List;
import javax.ejb.Local;

/**
 *
 * @author lis
 */
@Local
public interface AccontFacadeLocal {

    void create(Accont accont);

    void edit(Accont accont);

    void remove(Accont accont);

    Accont find(Object id);

    List<Accont> findAll();

    List<Accont> findRange(int[] range);

    int count();

    boolean checkLogin(String u, String p);
    
}
