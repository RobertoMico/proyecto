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


var partidoView = function (strClase) {
    this.clase = strClase;
};
partidoView.prototype = new view('partido');
partidoView.prototype.getClassNamePartido = function () {
    return this.getClassName() + "Vista";
};
var oPartidoView = new partidoView('partido');


partidoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
        botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><img class="icono" src="images/ver.png"></img></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><img class="icono" src="images/editar.png"></img></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><img class="icono" src="images/eliminar.png"></img></a>';
    //solo cuando sea administrador
    //botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/list/page=1&id=1&rpp=10&vf=4&filter=id&filteroperator=like&filtervalue=' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    //botonera += '</div></div>';
    return botonera;

}
partidoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#partido_form #titulo').val(valores['titulo']);
//                    $('#partido_form #contenido').val(valores['contenido']);
//                    $('#partido_form #alta').val(valores['alta']);
//                    $('#partido_form #cambio').val(valores['cambio']);
//                    $('#partido_form #hits').val(valores['hits']);
//                    $('#partido_form #id_usuario').val(valores['id_usuario']);
//                    $('#partido_form #etiquetas').val(valores['etiquetas']);
//                    $('#partido_form #publicado').val(valores['publicado']);
//                    $('#partido_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

partidoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#partido_form #titulo');
//                    valores['contenido'] = $('#partido_form #contenido');
//                    valores['alta'] = $('#partido_form #alta');
//                    valores['cambio'] = $('#partido_form #cambio');
//                    valores['hits'] = $('#partido_form #hits');
//                    valores['id_usuario'] = $('#partido_form #id_usuario');
//                    valores['etiquetas'] = $('#partido_form #etiquetas');
//                    valores['publicado'] = $('#partido_form #publicado');
//                    valores['portada'] = $('#partido_form #portada');

    var disabled = $('#partidoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#partidoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

partidoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#partidoForm #obj_contrincante_button').unbind('click');
    $("#partidoForm #obj_contrincante_button").click(function () {
        var oControl = oContrincanteControl;  //para probar dejar partido
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "partido");

        $("#partidoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de contrincante'), "", thisObject.getFormFooter(), true);

        $('#partidoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oContrincanteModel, oContrincanteView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_contrincante_id').val(id).change();
            $('#obj_contrincante_desc').text(decodeURIComponent(oContrincanteModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        }, oContrincanteModel, oContrincanteView);
        return false;
    });



};

partidoView.prototype.okValidation = function (f) {
    $('#partidoForm').on('success.form.bv', f);
};