
import React from 'react';
import { View } from '@tarojs/components';
/**
 * 把组件与传入的Modal组合
 * modal主动关闭调用close：可以传入回传的数据：close()
 * 打开modal：show(modaName)(params)
 * 当前组件关闭modal：由modal自己控制关闭
 * @param {Object} modals 需要传入Object，因为需要知道每个moda名，返回的数据也是存在对应的modal名下
 */
interface ModalComponentProps {

}

interface ModalComponentState {
  modalParams: {
    [name: string]: Object,
  },
  [modalName: string]: any;
}
const CombineModal = (modals: any) => (Component: any) =>
  class ModalComponent extends React.Component<ModalComponentProps, ModalComponentState> {
    constructor(props) {
      super(props);
      this.state = {
        modalParams: {}
      };
    }

    show = (ModalName: string) => (params: any) => {
      this.setState({
        [ModalName]: true,
        modalParams: {
          ...this.state.modalParams,
          [ModalName]: params
        }
      });
    };

    close = (ModalName: string) => () => {
      this.setState({
        [ModalName]: false
      });
    };

    render() {
      return (
        <View>
          <Component
            show={this.show}
            close={this.close}
            {...this.props}
          />
          {Object.keys(modals).map(modalName => {
            const Modal = modals[modalName];
            return (
              <Modal
                key={modalName}
                {...this.state.modalParams[modalName]}
                visible={this.state[modalName]}
                onClose={this.close(modalName)}
              />
            );
          })}
        </View>
      );
    }
  };


export default CombineModal;
