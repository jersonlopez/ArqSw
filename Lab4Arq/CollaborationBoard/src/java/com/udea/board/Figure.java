/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.udea.board;

import java.io.StringWriter;
import javax.json.Json;
import javax.json.JsonObject;

/**
 *
 * @author jerson.lopez
 */
public class Figure {

    public Figure(JsonObject json) {
        this.json = json;
    }

    public JsonObject getJson() {
        return json;
    }

    public void setJson(JsonObject json) {
        this.json = json;
    }
    
  private JsonObject json;

    @Override
    public String toString() {
        StringWriter write = new StringWriter();
        Json.createWriter(write).write(json);
        return write.toString();
    }
  
  
}
