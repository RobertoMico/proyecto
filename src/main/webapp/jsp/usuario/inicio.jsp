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

<%@page import="net.daw.helper.AppInformationHelper"%>
<%@page import="net.daw.helper.EstadoHelper"%>
<div class="bienvenida">
    <h1>Bienvenidos a la p�gina web oficial de:</h1>
    <img class="escudo2" src="css/images/escudo.png" alt="U.D. La Plata">
    <p><%=AppInformationHelper.getAppName()%></p>
 
   <!-- <%
        if (EstadoHelper.getTipo_estado() == EstadoHelper.getTipo_estado().Debug) {
            out.print("<h5>Modo debug</h5>");
        }
    %>-->
</div>