package edu.pitt.webproject;

import java.io.IOException;

import javax.ejb.EJB;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import edu.pitt.webproject2.facade.GameRecordFacade;
import edu.pitt.webproject2.facade.LoginFacade;

/**
 * Servlet implementation class SaveRecord
 */
@WebServlet("/SaveRecord")
public class SaveRecord extends HttpServlet {
	@EJB
	GameRecordFacade rf;
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveRecord() {
        super();
        // TODO Auto-generated constructor stub
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
		int id = Integer.parseInt(request.getParameter("userID"));
		String result=request.getParameter("result");
		int moves =Integer.parseInt(request.getParameter("movesRes"));
		int times=Integer.parseInt(request.getParameter("timeRes"));
		rf.addRecordToDB(id, result, times, moves);
		
		if (result.equals("win")) {
			int winCount = (int) request.getSession().getAttribute("userWin");
			request.getSession().setAttribute("userWin", winCount + 1);
		}
		else {
			int lossCount = (int) request.getSession().getAttribute("userLoss");
			request.getSession().setAttribute("userLoss", lossCount + 1);
		}
		
		
		response.getWriter().write("success");
		response.getWriter().flush();
		
		
		
		System.out.println(result);
		
		
	}

}
