<template>
  <div>
    <main class="container-fluid">
      <div class="row">
        <div class="col-10 offset-1">
          <div class="card mt-3 mb-4 w_min">
            <div class="card-body py-0">
              <div class="row">
                <div class="col-12 pt-3">
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <th class="c_size" scope="row">
                          <img
                            src="@/assets/sicard.jpg"
                            class="c_size"
                            alt="カード"
                          />
                        </th>

                        <td>
                          <table class="table table-borderless">
                            <tbody>
                              <tr>
                                <td class="c_name">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label float-end mt-2"
                                    >名前:
                                  </label>
                                </td>
                                <td>
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="名前を入力してください"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td class="c_name">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label float-end mt-2"
                                    >性別:
                                  </label>
                                </td>
                                <td>
                                  <select
                                    class="form-select"
                                    aria-label="Default select example"
                                  >
                                    <option selected>
                                      -性別を選択してください-
                                    </option>
                                    <option value="1">男</option>
                                    <option value="2">女</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td class="c_name">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label float-end mt-2"
                                    >オンプレイ環境:
                                  </label>
                                </td>
                                <td>
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="オンプレイ環境を入力してください"
                                  />
                                </td>
                              </tr>
                              <tr class="mt-1">
                                <td class="c_name">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label float-end mt-2"
                                    >マダミス歴:
                                  </label>
                                </td>
                                <td>
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="マダミス歴を入力してください"
                                  />
                                </td>
                              </tr>
                              <tr class="mt-1">
                                <td class="c_name">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label float-end mt-2"
                                    >プレイスタイル:
                                  </label>
                                </td>
                                <td>
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="プレイスタイルを入力してください"
                                  />
                                </td>
                              </tr>
                              <tr class="mt-1">
                                <td class="c_name">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label float-end mt-2"
                                    >好きな役職:
                                  </label>
                                </td>
                                <td>
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="好きな役職を入力してください"
                                  />
                                </td>
                              </tr>
                              <tr class="mt-1">
                                <td class="c_name">
                                  <label
                                    for="exampleFormControlInput1"
                                    class="form-label float-end mt-2"
                                    >通過タイトル:
                                  </label>
                                </td>
                                <td>
                                  <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="通過タイトルを入力してください"
                                  ></textarea>
                                </td>
                              </tr>
                              <tr class="mt-1">
                                <td colspan="2">
                                  <div class="mt-3 d-flex justify-content-end">
                                    <div class="m-2">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                      >
                                        ダウンロード
                                      </button>
                                    </div>
                                    
                                    <div class="m-2">
                                      <button
                                        type="button"
                                        class="btn btn-info"
                                      >
                                        twitterに投稿
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.w_min {
  min-width:740px;
}
</style>