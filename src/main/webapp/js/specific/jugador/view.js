/* 
 * Copyright (C) 2014 raznara
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


var jugadorView = function (strClase) {
    this.clase = strClase;
};
jugadorView.prototype = new view('jugador');
jugadorView.prototype.getClassNameJugador = function () {
    return this.getClassName() + "Vista";
};
var oJugadorView = new jugadorView('jugador');


jugadorView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><img class="icono" src="images/ver.png"></img></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><img class="icono" src="images/editar.png"></img></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><img class="icono" src="images/eliminar.png"></img></a>';
    botonera += '<a class="btn btn-default upload" id="' + id + '"  href="jsp#/' + this.clase + '/upload/' + id + '"><img class="icono" src="images/eliminar.png"></img></a>';
    botonera += '</div></div>';
    return botonera;

};
jugadorView.prototype.loadFormValues = function (valores, campos) {
//                    $('#jugador_form #titulo').val(valores['titulo']);
//                    $('#jugador_form #contenido').val(valores['contenido']);
//                    $('#jugador_form #alta').val(valores['alta']);
//                    $('#jugador_form #cambio').val(valores['cambio']);
//                    $('#jugador_form #hits').val(valores['hits']);
//                    $('#jugador_form #id_usuario').val(valores['id_usuario']);
//                    $('#jugador_form #etiquetas').val(valores['etiquetas']);
//                    $('#jugador_form #publicado').val(valores['publicado']);
//                    $('#jugador_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

jugadorView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#jugador_form #titulo');
//                    valores['contenido'] = $('#jugador_form #contenido');
//                    valores['alta'] = $('#jugador_form #alta');
//                    valores['cambio'] = $('#jugador_form #cambio');
//                    valores['hits'] = $('#jugador_form #hits');
//                    valores['id_usuario'] = $('#jugador_form #id_usuario');
//                    valores['etiquetas'] = $('#jugador_form #etiquetas');
//                    valores['publicado'] = $('#jugador_form #publicado');
//                    valores['portada'] = $('#jugador_form #portada');

    var disabled = $('#jugadorForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#jugadorForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

jugadorView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#jugadorForm #obj_usuario_button').unbind('click');
    $("#jugadorForm #obj_usuario_button").click(function () {
        var oControl = oJugadorControl;  //para probar dejar jugador
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "jugador");

        $("#jugadorForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#jugadorForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oJugadorModel, oJugadorView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oJugadorModel, oJugadorView);
        return false;
    });
    $('#jugadorForm #obj_tipojugador_button').unbind('click');
    $("#jugadorForm #obj_tipojugador_button").click(function () {
        var oControl = oJugadorControl;

        $("#jugadorForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de jugador'), "", thisObject.getFormFooter(), true);

        $('#jugadorForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oJugadorModel, oJugadorView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipojugador_id').val(id).change();
            $('#obj_tipojugador_desc').text(decodeURIComponent(oTipojugadorModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oJugadorModel, oJugadorView);
        return false;
    });
    $('#contenido_button').unbind('click');
    $('#contenido_button').click(function () {
        //cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
        cabecera = thisObject.getFormHeader('Edición de contenidos');
        //pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';                        
        pie = '<a class="btn btn-primary" href="http://creoleparser.googlecode.com/svn/trunk/creoleparser/test_pages/CheatSheetPlus.html">Sintaxis</a>';
        pie += thisObject.getFormFooter();
        contenido = '<div class="row"><div class="col-md-6">';
        contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
        contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
        contenido += '</div>';

        $('#jugadorForm').append(thisObject.getEmptyModal());

        util().loadForm('#modal01', cabecera, contenido, pie, true);
        var texto = $('#contenido').val();
        $('#contenidomodal').val(texto);
        util().creoleParse(texto, $('#textoparseado'));
        $('#contenido').val($('#contenidomodal').val());
        $('#contenidomodal').keyup(function () {
            util().creoleParse($('#contenidomodal').val(), $('#textoparseado'));
            $('#contenido').val($('#contenidomodal').val());
        });
        return false;
    });
};

jugadorView.prototype.okValidation = function (f) {
    $('#jugadorForm').on('success.form.bv', f);
};