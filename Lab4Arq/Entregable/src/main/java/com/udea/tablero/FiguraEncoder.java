/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.tablero;

import javax.websocket.EncodeException;
import javax.websocket.Encoder;
import javax.websocket.EndpointConfig;

/**
 *
 * @author jerson.lopez
 */
public class FiguraEncoder implements Encoder.Text<Figura> {

    @Override
    public String encode(Figura figura) throws EncodeException {
       return figura.getJson().toString();
    }

    @Override
    public void init(EndpointConfig config) {
        System.out.println("Init");
    }

    @Override
    public void destroy() {
        System.out.println("Destroy");
    }
    
}
