/*
 * Copyright (C) July 2014 Rafael Aznar
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package net.daw.bean.generic.specific.implementation;

import com.google.gson.annotations.Expose;
import java.util.Date;
import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;

/**
 *
 * @author Roberto
 */
public class PartidoBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    
    
    public PartidoBeanGenSpImpl() {
    }

    public PartidoBeanGenSpImpl(Integer id) {
        super(id);
    }
    
    
    
    @Expose(serialize = false)
    private Integer id_contrincante = 0;
    @Expose (deserialize = false)
    private ContrincanteBeanGenSpImpl obj_contrincante = null;
    
    @Expose
    private Integer golescontra = 0;
    
    @Expose
    private Date fecha = new Date();

    public Integer getId_contrincante() {
        return id_contrincante;
    }

    public void setId_contrincante(Integer id_contrincante) {
        this.id_contrincante = id_contrincante;
    }

    public ContrincanteBeanGenSpImpl getObj_rival() {
        return obj_contrincante;
    }

    public void setObj_contrincante(ContrincanteBeanGenSpImpl obj_contrincante) {
        this.obj_contrincante = obj_contrincante;
    }

    public Integer getGolescontra() {
        return golescontra;
    }

    public void setGolescontra(Integer golescontra) {
        this.golescontra = golescontra;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    




}
