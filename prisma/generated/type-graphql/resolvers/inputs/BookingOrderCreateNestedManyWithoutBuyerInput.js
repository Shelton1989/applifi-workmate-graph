"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingOrderCreateNestedManyWithoutBuyerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BookingOrderCreateManyBuyerInputEnvelope_1 = require("../inputs/BookingOrderCreateManyBuyerInputEnvelope");
const BookingOrderCreateOrConnectWithoutBuyerInput_1 = require("../inputs/BookingOrderCreateOrConnectWithoutBuyerInput");
const BookingOrderCreateWithoutBuyerInput_1 = require("../inputs/BookingOrderCreateWithoutBuyerInput");
const BookingOrderWhereUniqueInput_1 = require("../inputs/BookingOrderWhereUniqueInput");
let BookingOrderCreateNestedManyWithoutBuyerInput = class BookingOrderCreateNestedManyWithoutBuyerInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateWithoutBuyerInput_1.BookingOrderCreateWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutBuyerInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderCreateOrConnectWithoutBuyerInput_1.BookingOrderCreateOrConnectWithoutBuyerInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutBuyerInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BookingOrderCreateManyBuyerInputEnvelope_1.BookingOrderCreateManyBuyerInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BookingOrderCreateManyBuyerInputEnvelope_1.BookingOrderCreateManyBuyerInputEnvelope)
], BookingOrderCreateNestedManyWithoutBuyerInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BookingOrderWhereUniqueInput_1.BookingOrderWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BookingOrderCreateNestedManyWithoutBuyerInput.prototype, "connect", void 0);
BookingOrderCreateNestedManyWithoutBuyerInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BookingOrderCreateNestedManyWithoutBuyerInput", {
        isAbstract: true
    })
], BookingOrderCreateNestedManyWithoutBuyerInput);
exports.BookingOrderCreateNestedManyWithoutBuyerInput = BookingOrderCreateNestedManyWithoutBuyerInput;
