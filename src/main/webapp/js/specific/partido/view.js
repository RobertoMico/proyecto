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
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    //solo cuando sea administrador
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/list/page=1&id=1&rpp=10&vf=4&filter=id&filteroperator=like&filtervalue='+id+'"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
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
   

   
};

partidoView.prototype.okValidation = function (f) {
    $('#partidoForm').on('success.form.bv', f);
};