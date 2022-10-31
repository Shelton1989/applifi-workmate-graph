"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicWhereInput_1 = require("../inputs/TopicWhereInput");
let TopicRelationFilter = class TopicRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereInput_1.TopicWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereInput_1.TopicWhereInput)
], TopicRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereInput_1.TopicWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereInput_1.TopicWhereInput)
], TopicRelationFilter.prototype, "isNot", void 0);
TopicRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicRelationFilter", {
        isAbstract: true
    })
], TopicRelationFilter);
exports.TopicRelationFilter = TopicRelationFilter;
