"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCreateManyPatientInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderCreateManyPatientInput_1 = require("../inputs/OrderCreateManyPatientInput");
let OrderCreateManyPatientInputEnvelope = class OrderCreateManyPatientInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderCreateManyPatientInput_1.OrderCreateManyPatientInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], OrderCreateManyPatientInputEnvelope.prototype, "data", void 0);
OrderCreateManyPatientInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("OrderCreateManyPatientInputEnvelope", {
        isAbstract: true
    })
], OrderCreateManyPatientInputEnvelope);
exports.OrderCreateManyPatientInputEnvelope = OrderCreateManyPatientInputEnvelope;
