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

<form class="form-horizontal" role="form" action="#" id="jugadorForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label"  for="nombre">Nombre:</label>
        <div class="col-sm-6">
            <input type="text" id="nombre" class="form-control"  name="nombre" size="25" placeholder="nombre" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label" for="ape1">Apellido1:</label> 
        <div class="col-sm-3">           
            <input type="text" id="ape1" class="form-control"  name="ape1" size="50" placeholder="ape1" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="ape2">Apellido2:</label>
        <div class="col-sm-2">
            <input type="text"  class="form-control"  id="ape2" name="ape2" size="50" placeholder="ape2" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label"  for="dorsal">Dorsal</label>
        <div class="col-sm-1">
            <input type="text"  class="form-control"  id="dorsal" name="dorsal" size="2" placeholder="dorsal" />
        </div>
    </div>

    <input type="hidden"  class="form-control"  id="imagen" name="imagen" size="255" placeholder="imagen" />
    
    
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
        
        $('#jugadorForm')
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
