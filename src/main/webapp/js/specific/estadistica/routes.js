/* 
 * Copyright (C) 2014 rafa
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


function fEstadisticaRoutes() {

//    Path.map("#/estadistica").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('estadistica').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //estadisticaControl.modalListEventsLoading(estadisticaObject, estadisticaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/estadistica").to(function () {
        $('#indexContenidoJsp').spinner();
        oEstadisticaControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oEstadisticaModel, oEstadisticaView);
        //estadisticaControl.modalListEventsLoading(estadisticaObject, estadisticaView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oEstadisticaControl.getClassNameEstadistica());
        return false;
    });

    Path.map("#/estadistica/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadisticaControl.list($('#indexContenido'), paramsObject, null, oEstadisticaModel, oEstadisticaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/estadistica/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadisticaControl.view($('#indexContenido'), paramsObject['id'], oEstadisticaModel, oEstadisticaView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/estadistica/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadisticaControl.edit($('#indexContenido'), paramsObject['id'], oEstadisticaModel, oEstadisticaView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/estadistica/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadisticaControl.new($('#indexContenido'), null, oEstadisticaModel, oEstadisticaView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/estadistica/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oEstadisticaControl.remove($('#indexContenido'), paramsObject['id'], oEstadisticaModel, oEstadisticaView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}