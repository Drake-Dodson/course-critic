import { ReviewRepo } from "./ReviewRepo";
import { ClassRepo } from "./ClassRepo";

export class StaticBackend{

    constructor() {
        let Username = "CourseCriticUsername";
        let Password = "CourseCriticPassword";
        let Email = "CourseCritic@gmail.com";
        sessionStorage.setItem("ReviewRepo", JSON.stringify(ReviewRepo));
    }

    
    static intializeRepos(){
        sessionStorage.setItem("ReviewRepo", JSON.stringify(ReviewRepo));
    };

    static getReviewRepo(){
        ReviewRepo = sessionStorage.getItem("ReviewRepo");
        return ReviewRepo;
    }

    static addReview(title, difficultyScore, enjoyment, grade, description, classID){
        let newReview = {
            title: title,
            difficultyScore: difficultyScore,
            enjoyment: enjoyment,
            grade: grade,
            description: description,
            classID: classID 
        }
    
        ReviewRepo.push(newReview);
        sessionStorage.setItem("ReviewRepo", JSON.stringify(ReviewRepo));
    }

    static getClassScore = () => {
        sessionStorage.getItem("ReviewRepo");
    }
    
    static logReviewRepo() {
        sessionStorage.getItem("ReviewRepo");
        console.log(JSON.stringify(ReviewRepo));
    }

    static getClassByID(findID){
        return ClassRepo.filter(obj => {return obj.classID === findID});
    }

}
