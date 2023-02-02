import React from 'react';
import { useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './menu1.scss';
import Won from '../images/won.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';



function Menu1(){
       const [bookData, setBookData] = useState([]);
       const [totalPageData, setTotalPageData] = useState(0);
       const [pageData, setPageData] = useState(0);
       const [totalCount, setTotalCount] = useState(0);
       const [currentPage, setCurrentPage] = useState(0);
       const [searchData, setSearchData] = useState({searchWord:''});

       useEffect(() =>{
             /*alert(JSON.stringify(searchData));*/
             bringData(currentPage);
       },[currentPage])


       const onCheckEnter = (e) => {
           if(e.key === 'Enter') {
             searchEvent();
           }
       }
       function searchWord(e) {
            ///console.log(e.target.value)
            setSearchData({...searchData,searchWord:e.target.value})
       }
       function searchEvent(){
            alert(JSON.stringify(searchData));
            axios.get('/book/selectAllBook', {params: searchData })
            .then(res => {
                console.log(res.data);
                console.log(res.data.pageable.pageNumber);
                setBookData(res.data.content);
                setPageData(res.data.pageable);
            })
            .catch(error => {
                console.log(error)
            })
       }

       /* 책 리스트 가져오기 */
       async function bringData(currentPage) {
           await axios
           .get("/book/selectAllBook", {params: {size: 8, page: currentPage} })
           .then((res)=>{
               console.log(res.data);
               console.log(res.data.pageable.pageNumber);
                setBookData(res.data.content);
                setPageData(res.data.pageable);
                setTotalPageData(res.data.totalPages - 1);
                setTotalCount(res.data.totalElements); //페이지 개수
                setCurrentPage(res.data.pageable.pageNumber); //현재 페이지
           })
           .catch((err)=>{
               console.log(err);
           })
       }


    return(
            <div className="book-store">
                <div className="main-wrapper">
                    <div className="books-of">
                        {/* 실시간 베스트 */}
                        <div className="week">
                            <div className="author-title">실시간 베스트</div>
                            <div className="author">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"
                                    alt="" className="author-img">
                                </img>
                                <div className="author-name">Sebastian Jeremy</div>
                            </div>
                            <div className="author">
                                <img src="https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                                    alt="" className="author-img">
                                </img>
                                <div className="author-name">Jonathan Doe</div>
                            </div>
                            <div className="author">
                                <img src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                                    alt="" className="author-img">
                                </img>
                                <div className="author-name">Angeline Summer</div>
                            </div>
                            <div className="author">
                                <img src="https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg" alt=""
                                    className="author-img">
                                </img>
                                <div className="author-name">Noah Jones</div>
                            </div>
                        </div>

                        {/* 종합 베스트 */}
                        {bookData.map((item)=>{
                        return(
                            <div className="week year">
                                <div className="author-title">종합 베스트</div>
                                <div className="year-book">
                                    <img src={item.bk_img} alt="" className="year-book-img"></img>
                                    <div className="year-book-content">
                                        <div className="year-book-name">{item.bk_name}</div>
                                        <div className="year-book-author">{item.bk_author}</div>
                                    </div>
                                </div>
                            </div>
                        );
                        })}
                        <div className="overlay"></div>
                    </div>

                    {/* 장르 분류 바 */}
                    <div className="popular-books">
                        <Form className="d-flex" style={{marginLeft: '63%'}} onKeyPress={onCheckEnter}>
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={searchWord} />
                            <Button variant="outline-success"  onClick={searchEvent} >Search</Button>
                        </Form>
                        <div className="main-menu">
                            <div className="genre">Popular by Genre</div>
                            <div className="book-types">
                                <a href="#" className="book-type active"> All </a>
                                <a href="#" className="book-type"> 무협 </a>
                                <a href="#" className="book-type"> 판타지 </a>
                                <a href="#" className="book-type"> 스포츠 </a>
                                <a href="#" className="book-type"> 코믹 </a>
                                <a href="#" className="book-type"> 멜로 </a>
                            </div>
                        </div>

                        {/* 책 목록 */}
                        <div className="book-cards">
                            {bookData.map((item)=>{
                            return(
                                <div className="book-card">
                                    <div className="content-wrapper">
                                        <img src={item.bk_img}
                                            alt="" className="book-card-img"></img>
                                        <div className="card-content">
                                            <div className="book-name">{item.bk_name}</div>
                                            <div className="book-by">{item.bk_author}</div>
                                            <div className="rate">
                                                <fieldset className="rating book-rate">
                                                    <input type="checkbox" id="star-c1" name="rating" value="5" />
                                                    <label className="full" htmlFor="star-c1"></label>
                                                    <input type="checkbox" id="star-c2" name="rating" value="4" />
                                                    <label className="full" htmlFor="star-c2"></label>
                                                    <input type="checkbox" id="star-c3" name="rating" value="3" />
                                                    <label className="full" htmlFor="star-c3"></label>
                                                    <input type="checkbox" id="star-c4" name="rating" value="2" />
                                                    <label className="full" htmlFor="star-c4"></label>
                                                    <input type="checkbox" id="star-c5" name="rating" value="1" />
                                                    <label className="full" htmlFor="star-c5"></label>
                                                </fieldset>
                                                <span className="book-voters card-vote">1.987 voters</span>
                                            </div>
                                            <div className="book-sum card-sum">{item.bk_sum}</div>
                                        </div>
                                    </div>
                                    <div className="likes">
                                        <div className="like-profile">
                                            <img src={Won} alt="" className="like-img"></img>
                                        </div>
                                        <div className="like-name">
                                            <span>{item.bk_price}</span> <span>원</span>
                                        </div>
                                    </div>
                                </div>
                            );
                            })}

                            {/* 페이징 */}
                            <Pagination total={totalCount} current={currentPage} onChange={(page) => setCurrentPage(page)} />
                        </div>
                    </div>
                </div>
            </div>
       );
}

export default Menu1;