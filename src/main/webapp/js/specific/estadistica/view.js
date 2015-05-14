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


var estadisticaView = function (strClase) {
    this.clase = strClase;
};
estadisticaView.prototype = new view('estadistica');
estadisticaView.prototype.getClassNameEstadistica = function () {
    return this.getClassName() + "Vista";
};
var oEstadisticaView = new estadisticaView('estadistica');


estadisticaView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
        botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><img class="icono" src="images/ver.png"></img></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><img class="icono" src="images/editar.png"></img></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><img class="icono" src="images/eliminar.png"></img></a>';
    botonera += '</div></div>';
    return botonera;

};
estadisticaView.prototype.loadFormValues = function (valores, campos) {
//                    $('#estadistica_form #titulo').val(valores['titulo']);
//                    $('#estadistica_form #contenido').val(valores['contenido']);
//                    $('#estadistica_form #alta').val(valores['alta']);
//                    $('#estadistica_form #cambio').val(valores['cambio']);
//                    $('#estadistica_form #hits').val(valores['hits']);
//                    $('#estadistica_form #id_usuario').val(valores['id_usuario']);
//                    $('#estadistica_form #etiquetas').val(valores['etiquetas']);
//                    $('#estadistica_form #publicado').val(valores['publicado']);
//                    $('#estadistica_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

estadisticaView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#estadistica_form #titulo');
//                    valores['contenido'] = $('#estadistica_form #contenido');
//                    valores['alta'] = $('#estadistica_form #alta');
//                    valores['cambio'] = $('#estadistica_form #cambio');
//                    valores['hits'] = $('#estadistica_form #hits');
//                    valores['id_usuario'] = $('#estadistica_form #id_usuario');
//                    valores['etiquetas'] = $('#estadistica_form #etiquetas');
//                    valores['publicado'] = $('#estadistica_form #publicado');
//                    valores['portada'] = $('#estadistica_form #portada');

    var disabled = $('#estadisticaForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#estadisticaForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

estadisticaView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#estadisticaForm #obj_jugador_button').unbind('click');
    $("#estadisticaForm #obj_jugador_button").click(function () {
        var oControl = oEstadisticaControl;  //para probar dejar estadistica
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "estadistica");

        $("#estadisticaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de jugador'), "", thisObject.getFormFooter(), true);

        $('#estadisticaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oJugadorModel, oJugadorView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_jugador_id').val(id).change();
            $('#obj_jugador_desc').text(decodeURIComponent(oJugadorModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oJugadorModel, oJugadorView);
        return false;
    });

    $('#estadisticaForm #obj_partido_button').unbind('click');
    $("#estadisticaForm #obj_partido_button").click(function () {
        var oControl = oEstadisticaControl;

        $("#estadisticaForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de estadistica'), "", thisObject.getFormFooter(), true);

        $('#estadisticaForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oPartidoModel, oPartidoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_partido_id').val(id).change();
            $('#obj_partido_desc').text(decodeURIComponent(oPartidoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oPartidoModel, oPartidoView);
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

        $('#estadisticaForm').append(thisObject.getEmptyModal());

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

estadisticaView.prototype.okValidation = function (f) {
    $('#estadisticaForm').on('success.form.bv', f);
};