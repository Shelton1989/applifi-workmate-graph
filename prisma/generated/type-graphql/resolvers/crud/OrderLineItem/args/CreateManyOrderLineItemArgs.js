"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyOrderLineItemArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OrderLineItemCreateManyInput_1 = require("../../../inputs/OrderLineItemCreateManyInput");
let CreateManyOrderLineItemArgs = class CreateManyOrderLineItemArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OrderLineItemCreateManyInput_1.OrderLineItemCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyOrderLineItemArgs.prototype, "data", void 0);
CreateManyOrderLineItemArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyOrderLineItemArgs);
exports.CreateManyOrderLineItemArgs = CreateManyOrderLineItemArgs;
