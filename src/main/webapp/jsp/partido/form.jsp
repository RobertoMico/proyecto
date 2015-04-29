<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>

<form class="form-horizontal" role="form" action="#" id="partidoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>



    <div class="form-group">
        <label class="col-sm-2 control-label" for="fecha">Fecha:</label> 
        <div class="col-sm-3">           
            <div class='input-group date' id='fecha_group'>
                <input type='text' class="form-control" id='fecha_group' name="fecha" placeholder="Fecha" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="golescontra">Goles en contra:</label> 
        <div class="col-sm-3">           
            <input type="text" id="golescontra" class="form-control"  name="golescontra" size="50" placeholder="goles en contra" />
        </div>
    </div>


    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_contrincante_id">Id_contrincante: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_contrincante_id" class="input-mini" name="id_contrincante" type="text" size="5" maxlength="15" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_contrincante_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_contrincante_desc" id="obj_contrincante_desc"></label>                     
    </div>
    
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div id="messages"></div>
        </div>
    </div>



    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-primary" id="submitForm">Guardar</button>
        </div>
    </div>

</form>


<script type="text/javascript">

   $(document).ready(function () {
       $('#fecha_group').datetimepicker({
            pickTime: false,
            language: 'es',
            showToday: true
        });
        $('#partidoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        fecha_group: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una fecha'
                                },
                                date: {
                                    format: 'DD/MM/YYYY',
                                    message: 'La fecha no tiene formato DD/MM/YYYY'
                                }
                            }
                        },
                        golescontra: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un valor'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El valor debe tener como máximo 255 caracteres'
                                }
                            }
                        }

                    }
                });
    });


</script>
