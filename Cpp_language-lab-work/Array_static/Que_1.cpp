#include <iostream>

using namespace std;

class Hotel{

	private:
	    int id;
	    string name;
	    string type;
	    int rating;
	    string location;
	    int estyear;
	    int staqu;
	    int rmqu;
	
	    static string hotel_chain_name;
	
	public:
		
	    Hotel(int id, string name, string type, int rating,
	          string location, int estyear, int staqu, int rmqu)
	    {
	        this->id = id;
	        this->name = name;
	        this->type = type;
	        this->rating = rating;
	        this->location = location;
	        this->estyear = estyear;
	        this->staqu = staqu;
	        this->rmqu = rmqu;
	    }
	
	    void print(){
	
	        cout << "===================================" << endl;
	        
	        cout << "Hotel Chain Name :- " << hotel_chain_name << endl;
	        cout << "hotel_id :- " << id << endl;
	        cout << "hotel_name :- " << name << endl;
	        cout << "hotel_type :- " << type << endl;
	        cout << "hotel_rating :- " << rating << " Star" << endl;
	        cout << "hotel_location :- " << location << endl;
	        cout << "hotel_establish_year :- " << estyear << endl;
	        cout << "hotel_staff_quantity :- " << staqu << endl;
	        cout << "hotel_room_quantity :- " << rmqu << endl;
	        
	        cout << "===================================" << endl;
	    }
};

string Hotel::hotel_chain_name = "Yug Group";

int main(){

    int n;

    cout << "Enter number of hotels :- ";
    cin >> n;

    for(int i=0 ; i<n ; i++){

        int id = i+1, rating, estyear, staqu, rmqu;
        string name, type, location;

        cout << "\nHotel name :- ";
        cin >> name;

        cout << "Hotel type :- ";
        cin >> type;

        cout << "Hotel rating :- ";
        cin >> rating;

        cout << "Hotel location :- ";
        cin >> location;

        cout << "Hotel establish year :- ";
        cin >> estyear;

        cout << "Hotel staff quantity :- ";
        cin >> staqu;

        cout << "Hotel room quantity :- ";
        cin >> rmqu;

        Hotel h(id, name, type, rating, location, estyear, staqu, rmqu);
        h.print();
    }

    return 0;
}
