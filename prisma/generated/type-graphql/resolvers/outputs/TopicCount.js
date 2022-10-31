"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TopicCount = class TopicCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TopicCount.prototype, "Reactions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TopicCount.prototype, "SeasonSeries", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TopicCount.prototype, "Posts", void 0);
TopicCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TopicCount", {
        isAbstract: true
    })
], TopicCount);
exports.TopicCount = TopicCount;
