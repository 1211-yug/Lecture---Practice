#include<iostream>

using namespace std;

class Diamonds{
	
	private:
		
		int id;
		string name;
		int staqu;
		double rev;
		int imraw;
		int exp;
		string ceo;
		
	public:
		
		Diamonds(int id, string name, int staqu, double rev, int imraw, int exp, string ceo){
			this->id = id;
			this->name = name;
			this->staqu = staqu;
			this->rev = rev;
			this->imraw = imraw;
			this->exp = exp;
			this->ceo = ceo;
		}
		
		void print(){
			
			cout << "================================================================================" << endl;
			cout << endl;
			
			cout << "comp_id :- " << id << endl;
			cout << "comp_name :- " << name << endl;
			cout << "comp_staff_quantity :- " << staqu << endl;
			cout << "comp_revenue (per year) :- " << rev << endl;
			cout << "comp_import_raw_diamonds (no. of raw diamonds imported per year) :- " << imraw << endl;
			cout << "comp_export_diamonds (no. of diamonds per year) :- " << exp << endl;
			cout << "comp_ceo (name of CEO of the company) :- " << ceo << endl;
			
			cout << "================================================================================" << endl;
			cout << endl;
			
		}
		
};

int main(){
	
	int i,n;
	
	cout << "Enter number of companys :- ";
	cin >> n;
	
	for(i=0 ; i<n ; i++){
		
		int id = i+1,staqu,imraw,exp;
		double rev;
		string name,ceo;
		
		cout << "comp_name :- ";
		cin >> name;
		
		cout << "comp_staff_quantity :- ";
		cin >> staqu;
		
		cout << "comp_revenue (per year) :- ";
		cin >> rev;
		
		cout << "comp_import_raw_diamonds (no. of raw diamonds imported per year) :- ";
		cin >> imraw;
		
		cout << "comp_export_diamonds (no. of diamonds per year) :- ";
		cin >> exp;
		
		cout << "comp_ceo (name of CEO of the company) :- ";
		cin >> ceo;
		
		cout << endl;
		
		Diamonds d(id, name, staqu, rev, imraw, exp, ceo);
    	d.print();
		
	}
	
		
	
	return 0;
}