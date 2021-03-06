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
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>

<%
    int id_tipousuario = 0, id_usuario = 0;
    UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    if (user != null) {
        id_tipousuario = user.getId_tipousuario();
        id_usuario = user.getId();
    }
%>
<%--
<div class="panel menu1 panel-primary">
    <div class="menu3">
        <h3 class="panel-title">Sesi�n</h3>
    </div>
    <div class="list-group">
        <a class="list-group-item menu2" id="lnkHome"  href="jsp">Home</a>
        <a class="list-group-item menu2"  id="lnkLogout" href="jsp?ob=usuario&op=logout">Logout</a>
    </div>
</div>

<div class="panel menu1 panel-primary">
    <div class="menu3">
        <h3 class="panel-title">Gesti�n de Usuarios</h3>
    </div>
    <div class="list-group">
        <a  class="list-group-item menu2" id="lnkUsuario" href="jsp#/usuario">Usuario</a>
    </div>
</div>

<div class="panel menu1 panel-primary">
    <div class="menu3">
        <h3 class="panel-title">Mantenimientos</h3>
    </div>
    <div class="list-group">
        <a  class="list-group-item menu2" id="lnkJugador" href="jsp#/jugador">Jugador</a>
        <a  class="list-group-item menu2" id="lnkContrincante" href="jsp#/contrincante">Contrincante</a>
        <a  class="list-group-item menu2" id="lnkPartido" href="jsp#/partido">Partido</a>
        <a  class="list-group-item menu2" id="lnkEstadistica" href="jsp#/estadistica">Estadistica</a>
    </div>
</div>
<div class="panel menu1 panel-primary">
    <div class="menu3">
        <h3 class="panel-title">Cuestionario</h3>
    </div>
    <div class="list-group">
        <a class="list-group-item menu2" id="lnkCuestionario" href="jsp#/cuestionario">Cuestionario</a>
        <a class="list-group-item menu2" id="lnkPregunta" href="jsp#/pregunta">Pregunta</a>
        <a class="list-group-item menu2" id="lnkOpcion" href="jsp#/opcion">Opcion</a>
        <a class="list-group-item menu2" id="lnkRespuesta" href="jsp#/respuesta">Respuesta</a>
    </div>
</div>

--%>

<div id='cssmenu'>
<ul>
   <li class='active'><a href='#'><span>U.D. La Plata</span></a></li>
   <li class='has-sub'><a href='#'><span>Sesi�n</span></a>
      <ul>
            <li><a class="list-group-item menu2" id="lnkHome"  href="jsp"><span>Home</span></a></li>
            <li><a class="list-group-item menu2"  id="lnkLogout" href="jsp?ob=usuario&op=logout"><span>Logout</span></a></li>
      </ul>
   </li>
   <li class='has-sub'><a href='#'><span>Gesti�n de Usuarios</span></a>
      <ul>
          <li><a class="list-group-item menu2" id="lnkUsuario" href="jsp#/usuario"><span>Usuario</span></a></li>
      </ul>
   </li>
   <li class='has-sub'><a href='#'><span>Mantenimientos</span></a>
      <ul>
          <li><a  class="list-group-item menu2" id="lnkJugador" href="jsp#/jugador"><span>Jugador</span></a></li>
          <li><a  class="list-group-item menu2" id="lnkContrincante" href="jsp#/contrincante"><span>Contrincante</span></a></li>
          <li><a  class="list-group-item menu2" id="lnkPartido" href="jsp#/partido"><span>Partido</span></a></li>
          <li><a  class="list-group-item menu2" id="lnkEstadistica" href="jsp#/estadistica"><span>Estadistica</span></a></li>

      </ul>
   </li>

</ul>
</div>

