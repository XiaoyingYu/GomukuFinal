package edu.pitt.webproject;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.pitt.webproject2.facade.RegisterFacade;

/**
 * Servlet implementation class RegisterServlet
 */
@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	@EJB
	RegisterFacade rf;
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public RegisterServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		// response.getWriter().append("Served at:
		// ").append(request.getContextPath());
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		String user = request.getParameter("username");
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String infor = "";
		System.out.println("--->" + rf.checkUser(email));
		if (rf.checkUser(email) == null) {
			int id = rf.addUserToDB(user, email, password);
			infor = "Success! Welcome " + user + "! <a href='loginfinal.jsp'>Log In Here!</a>";
			// int id = rf.getUserID(email, password); //
			request.setAttribute("userID", id);// Use userID(name of id) to get
												// id
			// in jsp, id is a string
			request.setAttribute("info", infor + "<br>");
			request.getRequestDispatcher("register.jsp").forward(request, response);
		} else {
			infor = "This email has been registered. Please change another one or login.<a href='loginfinal.jsp'>Log In Here!</a>";
			request.setAttribute("info", infor + "<br>");
			request.getRequestDispatcher("register.jsp").forward(request, response);
		}
		// get boolean result to send message back.

		// Call facade function to save profile.

		// get boolean result to send message back.
		

		// doGet(request, response);
	}

}
