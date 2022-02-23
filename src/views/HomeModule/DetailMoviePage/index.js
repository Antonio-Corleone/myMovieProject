import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { Rate, Tabs } from 'antd';
import { actFetchDataDetailMovie } from './modules/actions'
import '../../../assets/styles/circle.css';

const { TabPane } = Tabs;
const Wrapper = styled.div`
  position: relative;
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
  }
`
export default function DetailMoviePage(props) {
  const id = props.match.params.id;
  const data = useSelector(state => state.detailMovieReducer.data)
  const showTime = useSelector(state => state.detailMovieReducer.showTime)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchDataDetailMovie(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="bg-warning" style={{ height: '3px' }}></div>
      <Wrapper
        className="pt-5"
        style={{
          backgroundImage: `url("${data && data.hinhAnh}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className="row justify-content-center">
              <div className="col-md-4 justify-content-center text-center">
                <img className='img-fluid' src={data && data.hinhAnh} alt={data && data.hinhAnh} />
              </div>
              <div className="col-md-6 text-left align-self-center py-3">
                <p className="text-success px-5 px-sm-5 px-md-0"><span className="text-warning">Tên phim: </span>{data && data.tenPhim}</p>
                <p className="text-success px-5 px-sm-5 px-md-0"><span className="text-warning">Mô tả: </span>{data && data.moTa}</p>
                <p className="text-success px-5 px-sm-5 px-md-0"><span className="text-warning">Ngày khởi chiếu: </span>{new Date(data && data.ngayKhoiChieu).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="row justify-content-center">
              <Rate allowHalf defaultValue={data && data.danhGia / 2} />
            </div>
            <div className="row mt-3 justify-content-center">
              <div className={`c100 p${data && data.danhGia / 10 * 100} big`}>
                <span>{data && data.danhGia / 10 * 100}%</span>
                <div className="slice">
                  <div className="bar" />
                  <div className="fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-light w-75 rounded my-5 pb-2" style={{ position: 'relative' }}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Show time" key="1">
              <Tabs tabPosition={'left'}>
                {showTime && showTime.heThongRapChieu.map((item, index) => {
                  return (
                    <TabPane
                      tab={
                        <div>
                          <img src={item.logo} width={50} height={50} alt="logo" />
                          {/* <p>{item.maHeThongRap}</p> */}
                        </div>

                      }
                      key={`${index + 1}`}
                    >
                      {item?.cumRapChieu.map((show) => {
                        return (
                          <div key={show.maCumRap}>
                            <div className="row">
                              <div className="col-md-2">
                                <img
                                  src={show.hinhAnh}
                                  alt="logo"
                                  style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%'
                                  }}
                                />
                              </div>
                              <div className="col-md-6 align-self-center">
                                <h6>Theater: {show.tenCumRap}</h6>
                                <p>Addresses: {show.diaChi}</p>
                              </div>
                            </div>
                            <div className="row pt-3">
                              {show?.lichChieuPhim.slice(0, 12).map((showItem) => {
                                return (
                                  <div className="col-md-3 py-3" key={showItem.maLichChieu}>
                                    <NavLink to={`/booking/${showItem.maLichChieu}`}>
                                      {new Date(showItem.ngayChieuGioChieu).toLocaleDateString()}
                                      <br />
                                      {new Date(showItem.ngayChieuGioChieu).toLocaleTimeString()}
                                    </NavLink>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })}
                    </TabPane>
                  )
                })}
              </Tabs>
            </TabPane>
            <TabPane tab="Info" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Reviews" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </Wrapper>
      <div className="bg-warning" style={{ height: '3px' }}></div>
    </>
  )
}
