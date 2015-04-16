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

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;


public class EstadisticaBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    
    public EstadisticaBeanGenSpImpl() {
    }

    public EstadisticaBeanGenSpImpl(Integer id) {
        super(id);
    }
    
    @Expose(serialize = false)
    private Integer id_jugador = 0;
    @Expose (deserialize = false)
    private JugadorBeanGenSpImpl obj_jugador = null;
    
    @Expose(serialize = false)
    private Integer id_partido = 0;
    @Expose (deserialize = false)
    private PartidoBeanGenSpImpl obj_partido = null;
    
    @Expose
    private Integer goles = 0;
    
    @Expose
    private Integer asistencias = 0;
    
    @Expose
    private Integer tarjetasrojas = 0;
    
    @Expose
    private Integer tarjetasamarillas = 0;

    public Integer getId_jugador() {
        return id_jugador;
    }

    public void setId_jugador(Integer id_jugador) {
        this.id_jugador = id_jugador;
    }

    public JugadorBeanGenSpImpl getObj_jugador() {
        return obj_jugador;
    }

    public void setObj_jugador(JugadorBeanGenSpImpl obj_jugador) {
        this.obj_jugador = obj_jugador;
    }

    public Integer getId_partido() {
        return id_partido;
    }

    public void setId_partido(Integer id_partido) {
        this.id_partido = id_partido;
    }

    public PartidoBeanGenSpImpl getObj_partido() {
        return obj_partido;
    }

    public void setObj_partido(PartidoBeanGenSpImpl obj_partido) {
        this.obj_partido = obj_partido;
    }

    public Integer getGoles() {
        return goles;
    }

    public void setGoles(Integer goles) {
        this.goles = goles;
    }

    public Integer getAsistencias() {
        return asistencias;
    }

    public void setAsistencias(Integer asistencias) {
        this.asistencias = asistencias;
    }

    public Integer getTarjetasrojas() {
        return tarjetasrojas;
    }

    public void setTarjetasrojas(Integer tarjetasrojas) {
        this.tarjetasrojas = tarjetasrojas;
    }

    public Integer getTarjetasamarillas() {
        return tarjetasamarillas;
    }

    public void setTarjetasamarillas(Integer tarjetasamarillas) {
        this.tarjetasamarillas = tarjetasamarillas;
    }
    

   
    
    
}