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


function fPartidoRoutes() {

//    Path.map("#/partido").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('partido').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //partidoControl.modalListEventsLoading(partidoObject, partidoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/partido").to(function () {
        $('#indexContenidoJsp').spinner();
        oPartidoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oPartidoModel, oPartidoView);
        //partidoControl.modalListEventsLoading(partidoObject, partidoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oPartidoControl.getClassNamePartido());
        return false;
    });

    Path.map("#/partido/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPartidoControl.list($('#indexContenido'), paramsObject, null, oPartidoModel, oPartidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/partido/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPartidoControl.view($('#indexContenido'), paramsObject['id'], oPartidoModel, oPartidoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/partido/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPartidoControl.edit($('#indexContenido'), paramsObject['id'], oPartidoModel, oPartidoView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/partido/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPartidoControl.new($('#indexContenido'), null, oPartidoModel, oPartidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/partido/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPartidoControl.remove($('#indexContenido'), paramsObject['id'], oPartidoModel, oPartidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/partido/partidousuario/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oPartidoControl.list($('#indexContenido'), paramsObject['id'], oPartidoModel, oPartidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}