package edu.pitt.webproject;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.pitt.webproject2.facade.LoginFacade;
import edu.pitt.webproject2.facade.RegisterFacade;
import eud.pitt.webproject2.entities.GomokuGame;
import eud.pitt.webproject2.entities.GomokuUser;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	@EJB
	LoginFacade rf;
	private static final long serialVersionUID = 1L;
      //private DBclass;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
        //DBclaas = new DBC
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		String infor="";
		if(rf.checkUserPass(email,password) == null){   
			
			   infor = "This username doesn't exist, please try again or sign up now.<a href='register.jsp'>Sign Up Here!</a> ";
			   request.setAttribute("message", infor);// Use userID(name of id) to get id
			   request.getRequestDispatcher("loginfinal.jsp").forward(request, response);
			      // in jsp, id is a string
		}else{
			GomokuUser userInfor=rf.checkUserPass(email, password);
			int userWin = rf.getUserWin(userInfor.getId());
			int userLoss = rf.getUserLoss(userInfor.getId());
			   
			   request.getSession().setAttribute("userProfile", userInfor);
			   request.getSession().setAttribute("userWin", userWin);
			   request.getSession().setAttribute("userLoss", userLoss);
			   
			   infor = "Welcome"+userInfor.getUsername();
			   request.getRequestDispatcher("index.jsp").forward(request, response);
			  }
		
		
		
		
		
		//doGet(request, response);
	}

}
