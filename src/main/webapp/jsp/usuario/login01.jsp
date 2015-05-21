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

<%@page import="net.daw.helper.EstadoHelper"%>
<div>

        <div class="iniciosesion col-sm-6 col-md-4 col-md-offset-4">
            <img class="escudologin" src="./css/images/escudo.png" alt="user image" />
            <h1>Iniciar<br />sesión</h1>
            <form class="form-signin" id="loginForm" action="jsp" role="form" method="post">                                    
                <input type="hidden" name="ob" value="usuario" />
                <input type="hidden" name="op" value="login02" />                
                
                <label class="usuariopass1" for="inputLogin" style="margin-top: 15px">Usuario:</label><br />
                <%
                    if (EstadoHelper.getTipo_estado() == EstadoHelper.getTipo_estado().Debug) {
                %>
                <input value="rafael"  id="inputLogin" type="text" placeholder="nombre de usuario" required="" autofocus="" name="login" />  <br />                                                  
                <%
                } else {
                %>
                <input  id="inputLogin" type="text" placeholder="nombre de usuario" required="" autofocus="" name="login" />                                                    
                <%
                    }
                %>
                <label class="usuariopass2" for="password" style="margin-top: 15px">Password:</label><br />
                <%
                    if (EstadoHelper.getTipo_estado() == EstadoHelper.getTipo_estado().Debug) {
                %>
                <input value="rafael" type="password" id="inputPassword" placeholder="contraseña"  required="" name="password" />                                                               
                <%
                } else {
                %>
                <input type="password" id="inputPassword" placeholder="contraseña"  required="" name="password" />                                                               
                <%
                    }
                %>                
                <button class="botonentrar" type="submit">Acceder</button>   
                <button class="botonlimpiar" type="reset">Limpiar</button>
            </form>
        </div>

</div>


