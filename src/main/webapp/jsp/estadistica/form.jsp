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

<form class="form-horizontal" role="form" action="#" id="estadisticaForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    
    
    
    
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_jugador_id">Id_jugador: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_jugador_id" class="input-mini" name="id_jugador" type="text" size="5" maxlength="15" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_jugador_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_jugador_desc" id="obj_jugador_desc"></label>                     
    </div>
    
    
    
    
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_partido_id">Id_partido: </label> 
        <div class="col-sm-2">              
            <input readonly="true"  class="form-control"  id="obj_partido_id" class="input-mini" name="id_partido" type="text" size="5" maxlength="15" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_partido_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-6" for="obj_partido_desc" id="obj_partido_desc"></label>                     
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="goles">Goles a favor:</label>
        <div class="col-sm-1">
            <input type="text" id="nombre" class="form-control"  name="goles" size="2" placeholder="goles" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="asistencias">Asistencias:</label> 
        <div class="col-sm-3">           
            <input type="text" id="ape1" class="form-control"  name="asistencias" size="50" placeholder="asistencias" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="tarjetasrojas">Tarjetasrojas:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="ape2" name="tarjetasrojas" size="50" placeholder="tarjetasrojas" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="tarjetasamarillas">Tarjetasamarillas:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="dorsal" name="tarjetasamarillas" size="2" placeholder="tarjetasamarillas" />
        </div>
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
     
        $('#estadisticaForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nombre: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un valor'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El valor debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        ape1: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un valor'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El valor debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        ape2: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un valor'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El valor debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        dorsal: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un valor'
                                },
                                stringLength: {
                                    max: 2,
                                    message: 'El valor debe tener como máximo 2 caracteres'
                                }
                            }
                        }
                        
                    }
                });
    });
</script>
