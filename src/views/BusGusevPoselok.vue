<template>
  <div class="bus-gusev-poselok">

    <!-- Breadcrumb -->
    <section class="gs-container gs-container_center">
        <ol class="gs-breadcrumb">
            <li class="gs-breadcrumb__list-item"> <router-link class="gs-breadcrumb__link" :to="{ name: 'Home', params: { city: $route.params.city } }"> GS Гусев </router-link> </li>
            <li class="gs-breadcrumb__list-item gs-breadcrumb__list-item_active"> Гусев-Поселок </li>
        </ol>
    </section>

    <!-- Well -->
    <section class="gs-container gs-container_center">
        <p class="gs-well">
            Автобусы идут от остановки "Площадь" в сторону поселка.
        </p>
    </section>

    <!-- Table -->
    <transition name="fade" appear>
        <section class="gs-container gs-container_center gs-container_padding-bottom">
            <div class="gs-well">
                <table class="gs-table gs-table-fixed-header" id="gs-table-fixed">
                    <thead>
                    <tr>
                        <th class="gs-table_text-center" colspan="2">
                            <span class="gs-table__thead_hidden-small-text">Расписание автобуса 2,5 (ул.Луговая - п.Северный)</span>
                            <span class="gs-table__thead_visible-small-text">Расписание автобуса 2,5</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="gs-table_text-left">
                        <td width="50%">Будние дни</td>
                        <td width="50%">
                            <span class="gs-table__thead_hidden-small-text">Выходные, каникулы, праздничные дни</span>
                            <span class="gs-table__thead_visible-small-text">Выходные дни</span>
                        </td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">6:56</td>
                        <td width="50%">6:56</td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">7:41</td>
                        <td width="50%">7:41</td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">09:30</td>
                        <td width="50%">09:20</td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">12:21</td>
                        <td width="50%">12:21</td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">14:11</td>
                        <td width="50%">14:11</td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">14:58</td>
                        <td width="50%">-</td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">15:53</td>
                        <td width="50%">-</td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">18:12</td>
                        <td width="50%">18:12</td>
                    </tr>
                    <tr class="gs-table_text-left">
                        <td width="50%">19:03</td>
                        <td width="50%">19:03</td>
                    </tr>
                    </tbody>
                </table>
                <TableFixedTHead/>
            </div>
        </section>
    </transition>

  </div>
</template>

<script>

import TableFixedTHead from '../components/TableFixedTHead'

export default {
  name: 'BusGusevPoselok',
  components: {
    TableFixedTHead
  }
}
</script>

<style lang="scss" scoped>

@import '../assets/scss/bus-gusev-poselok.scss';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
