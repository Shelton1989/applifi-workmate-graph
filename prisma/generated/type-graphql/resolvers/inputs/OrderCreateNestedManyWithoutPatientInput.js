"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateNestedManyWithoutPatientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyPatientInputEnvelope_1 = require("../inputs/OrderCreateManyPatientInputEnvelope");
const OrderCreateOrConnectWithoutPatientInput_1 = require("../inputs/OrderCreateOrConnectWithoutPatientInput");
const OrderCreateWithoutPatientInput_1 = require("../inputs/OrderCreateWithoutPatientInput");
const OrderWhereUniqueInput_1 = require("../inputs/OrderWhereUniqueInput");
let OrderCreateNestedManyWithoutPatientInput = class OrderCreateNestedManyWithoutPatientInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateWithoutPatientInput_1.OrderCreateWithoutPatientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutPatientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutPatientInput_1.OrderCreateOrConnectWithoutPatientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutPatientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OrderCreateManyPatientInputEnvelope_1.OrderCreateManyPatientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OrderCreateManyPatientInputEnvelope_1.OrderCreateManyPatientInputEnvelope)
], OrderCreateNestedManyWithoutPatientInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderWhereUniqueInput_1.OrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateNestedManyWithoutPatientInput.prototype, "connect", void 0);
OrderCreateNestedManyWithoutPatientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateNestedManyWithoutPatientInput", {
        isAbstract: true
    })
], OrderCreateNestedManyWithoutPatientInput);
exports.OrderCreateNestedManyWithoutPatientInput = OrderCreateNestedManyWithoutPatientInput;
