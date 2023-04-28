import { Component } from "react"
import CommentList from "./CommentList"
import AddComment from "./AddComment"

class CommentArea extends Component {
    state = {
        reviews: []
    }

    getAllReviews = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`,{
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MWZkNmY4MWI0MjAwMTM5YjI3YmYiLCJpYXQiOjE2ODA1MjQwNjYsImV4cCI6MTY4MTczMzY2Nn0.UjCTAORaVCu0q_cXXjagxZXZKmM-OsuCtidji_bIVOg"
                }
            })
        if (response.ok){
            let data = await response.json()
            console.log(data)
            this.setState({
                reviews: data
            })
        }else {
            console.log('errore nella chiamata')
        }
        }catch (error) {
            console.log(error)
        }
    }

    componentDidMount(){
        this.getAllReviews()
    }

    render(){
        return (
            <>
            <CommentList recensioni={this.state.reviews}/>
            <AddComment bookAsin={this.props.bookAsin}/>
            </>
        )
    }
}

export default CommentArea