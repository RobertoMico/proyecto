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


function fJugadorRoutes() {

//    Path.map("#/jugador").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('jugador').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //jugadorControl.modalListEventsLoading(jugadorObject, jugadorView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/jugador").to(function () {
        $('#indexContenidoJsp').spinner();
        oJugadorControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oJugadorModel, oJugadorView);
        //jugadorControl.modalListEventsLoading(jugadorObject, jugadorView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oJugadorControl.getClassNameJugador());
        return false;
    });

    Path.map("#/jugador/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oJugadorControl.list($('#indexContenido'), paramsObject, null, oJugadorModel, oJugadorView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/jugador/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oJugadorControl.view($('#indexContenido'), paramsObject['id'], oJugadorModel, oJugadorView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/jugador/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oJugadorControl.edit($('#indexContenido'), paramsObject['id'], oJugadorModel, oJugadorView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/jugador/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oJugadorControl.new($('#indexContenido'), null,oJugadorModel, oJugadorView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/jugador/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oJugadorControl.remove($('#indexContenido'), paramsObject['id'], oJugadorModel, oJugadorView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}