/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.ejb;

import com.udea.modelo.Accont;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author lis
 */
@Stateless
public class AccontFacade extends AbstractFacade<Accont> implements AccontFacadeLocal {

    @PersistenceContext(unitName = "Lab1Arq2017PU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public AccontFacade() {
        super(Accont.class);
    }

    @Override
    public boolean checkLogin(String u, String p) {
        Query q = em.createQuery("select a from Accont a where a.username=:u and a.password=:p");
        q.setParameter("u",u);
        q.setParameter("p", p);
        return q.getResultList().size()>0;
    }
    
}
