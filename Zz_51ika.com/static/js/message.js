$(function () {

  //留言表单验证
  $('#message').bootstrapValidator({
    // 默认的提示消息
    message: 'This value is not valid',
    // 表单框里右侧的icon
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      username: {
        message: '用户名验证失败',
        validators: {
          notEmpty: {
            message: '用户名不能为空'
          },
          /* stringLength: {  //长度限制
            min: 6,
            max: 18,
            message: '用户名长度必须在6到18位之间'
          }, */
          /* regexp: { //正则表达式
            regexp: /^[a-zA-Z0-9_]+$/,
            message: '用户名只能包含大写、小写、数字和下划线'
          } */
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: '邮箱地址不能为空'
          },
          emailAddress: {
            message: '邮箱地址格式有误'
          }
        }
      },
      phone: {
        validators: {
          notEmpty: {
            message: '手机号不能为空'
          },
          regexp: {
            regexp: /^1\d{10}$/,
            message: '手机号格式错误'
          }
        }
      },
      question: {
        validators: {
          notEmpty: {
            message: '问题不能为空'
          }
        }
      },
      info: {
        validators: {
          notEmpty: {
            message: '留言不能为空'
          },
          stringLength: {
            min: 5,
            message: '问题不能少于5个字'
          }
        }
      }

    }
  })
  var bootstrapValidator = $('#message').data('bootstrapValidator');

  //留言提交请求
  $('#message .submit').on('click', function () {
    //防止表单重复提交并禁止跳转刷新    
    event.preventDefault();
    //调用表单验证插件
    bootstrapValidator.validate();
    if (bootstrapValidator.isValid()) {
      //获取提交地址
      var url = $('#message').attr('action');
      //获取提交表单json数据组                                    
      var formData = new FormData($('#message')[0]);
      /* for (var [a,b] of formData.entries()) {
          console.log(a,b); 
      } */
      //数据发送后台验证
      $.ajax({
        dataType: "json",
        url: url,
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        timeout: 3000,
        success: function (data) {
          //表单验证成功
          if (data.code == 1) {
            swal(data.msg, "", "success");
            setTimeout(function () {
              window.location.reload();
            }, 2000);
          }
          //表单验证失败，返回错误信息
          else if (data.code == 0) {
            swal(data.msg, "", "error");
          }
        },
        error: function (response) {
          swal("请求失败", "", "error");
        }
      });
    }
  });


})