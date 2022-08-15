"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostCountAggregate_1 = require("../outputs/PostCountAggregate");
const PostMaxAggregate_1 = require("../outputs/PostMaxAggregate");
const PostMinAggregate_1 = require("../outputs/PostMinAggregate");
const MEDIA_TYPE_1 = require("../../enums/MEDIA_TYPE");
let PostGroupBy = class PostGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MEDIA_TYPE_1.MEDIA_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "caption", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], PostGroupBy.prototype, "mediaUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], PostGroupBy.prototype, "isCommentsEnabled", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "authorId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PostGroupBy.prototype, "productLink", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PostGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], PostGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostCountAggregate_1.PostCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostCountAggregate_1.PostCountAggregate)
], PostGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostMinAggregate_1.PostMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostMinAggregate_1.PostMinAggregate)
], PostGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostMaxAggregate_1.PostMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PostMaxAggregate_1.PostMaxAggregate)
], PostGroupBy.prototype, "_max", void 0);
PostGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PostGroupBy", {
        isAbstract: true
    })
], PostGroupBy);
exports.PostGroupBy = PostGroupBy;
