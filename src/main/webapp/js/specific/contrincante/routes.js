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


function fContrincanteRoutes() {

//    Path.map("#/documento").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('documento').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/contrincante").to(function () {
        $('#indexContenidoJsp').spinner();
        oContrincanteControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oContrincanteModel, oContrincanteView);
        //documentoControl.modalListEventsLoading(documentoObject, documentoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oContrincanteControl.getClassNameContrincante());
        return false;
    });

    Path.map("#/contrincante/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oContrincanteControl.list($('#indexContenido'), paramsObject, null, oContrincanteModel, oContrincanteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/contrincante/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oContrincanteControl.view($('#indexContenido'), paramsObject['id'], oContrincanteModel, oContrincanteView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/contrincante/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oContrincanteControl.edit($('#indexContenido'), paramsObject['id'], oContrincanteModel, oContrincanteView);
        $('#indexContenidoJsp').empty();
    });

    Path.map("#/contrincante/new").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oContrincanteControl.new($('#indexContenido'),null, oContrincanteModel, oContrincanteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/contrincante/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oContrincanteControl.remove($('#indexContenido'), paramsObject['id'], oContrincanteModel, oContrincanteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/contrincante/preguntas/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oContrincanteControl.remove($('#indexContenido'), paramsObject['id'], oContrincanteModel, oContrincanteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/contrincante/make/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oContrincanteControl.make($('#indexContenido'), paramsObject['id'], oContrincanteModel, oRespuestaModel, oContrincanteView);
        $('#indexContenidoJsp').empty();
        return false;
    });

}
