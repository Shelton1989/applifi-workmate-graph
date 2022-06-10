"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let AddressOrderByRelationAggregateInput = class AddressOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressOrderByRelationAggregateInput.prototype, "_count", void 0);
AddressOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressOrderByRelationAggregateInput", {
        isAbstract: true
    })
], AddressOrderByRelationAggregateInput);
exports.AddressOrderByRelationAggregateInput = AddressOrderByRelationAggregateInput;
