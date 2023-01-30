"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FeaturesWhereInput_1 = require("../inputs/FeaturesWhereInput");
let FeaturesListRelationFilter = class FeaturesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereInput_1.FeaturesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereInput_1.FeaturesWhereInput)
], FeaturesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereInput_1.FeaturesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereInput_1.FeaturesWhereInput)
], FeaturesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FeaturesWhereInput_1.FeaturesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FeaturesWhereInput_1.FeaturesWhereInput)
], FeaturesListRelationFilter.prototype, "none", void 0);
FeaturesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("FeaturesListRelationFilter", {
        isAbstract: true
    })
], FeaturesListRelationFilter);
exports.FeaturesListRelationFilter = FeaturesListRelationFilter;
