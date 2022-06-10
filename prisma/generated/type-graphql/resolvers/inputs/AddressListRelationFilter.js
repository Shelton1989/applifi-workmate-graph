"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressWhereInput_1 = require("../inputs/AddressWhereInput");
let AddressListRelationFilter = class AddressListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], AddressListRelationFilter.prototype, "none", void 0);
AddressListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AddressListRelationFilter", {
        isAbstract: true
    })
], AddressListRelationFilter);
exports.AddressListRelationFilter = AddressListRelationFilter;
