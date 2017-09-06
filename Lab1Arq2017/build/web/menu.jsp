<%-- 
    Document   : menu
    Created on : 11/01/2017, 09:02:32 PM
    Author     : jerson.lopez
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:if test="${empty login}">
    <a href="login.jsp">Login</a>
    <a href="newAccount.jsp">Register</a>
</c:if>
    
<c:if test="${not empty login}">
    <a href="AccountServlet?action=logout">Logout</a>
    <a href="AccountServlet?action=list">List Accounts</a>
</c:if>