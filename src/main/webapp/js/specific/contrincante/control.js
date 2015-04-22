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

var contrincanteControl = function (strClase) {
    this.clase = strClase;
};
contrincanteControl.prototype = new control('contrincante');
contrincanteControl.prototype.getClassNameContrincante = function () {
    return this.getClassName() + "Control";
};
contrincanteControl.prototype.make = function (place, id, oModel, oModelSet, oView) {
    var thisObject = this;
    $(place).empty();
    var oContrincanteModel = oModel;
    var oRespuestaModel = oModelSet;
    var oContrincanteView = oView;
    data = oContrincanteModel.getGenericOperation("getallpreguntas", id);
    formularioHTML = oContrincanteView.getContrincanteForm(data);
    validadorHTML = oContrincanteView.getValidationForm(data);
    $(place).append(oView.getPanel("Realizar contrincante de " + data[0].obj_pregunta.obj_contrincante.tipo,
            oContrincanteView.getEmptyView("contrincanteForm", 1)));
    $("#formularioContrincante").html(formularioHTML);
    $("#validadorContrincante").html(validadorHTML);
    
    $('#submitForm').click(function () {
        oView.okValidation(function (e) {
            var valores = [];
            valores = $('#contrincanteForm').serializeObject();
            resultado = oRespuestaModel.setGenericOperation("setform", {json: JSON.stringify(valores)});
            oView.doResultOperationNotifyToUser(place, resultado["status"], "Se han creado los registros con id=" + resultado["message"], resultado["message"], true);
            e.preventDefault();
            return false;
        });
    });
};

var oContrincanteControl = new contrincanteControl('contrincante');
